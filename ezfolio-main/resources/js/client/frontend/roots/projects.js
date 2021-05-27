import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Image, List, notification, Radio, Space } from 'antd';
import '../../common/assets/css/projects.css';
import ProjectPopup from '../components/ProjectPopup';
import Routes from '../../common/helpers/Routes';
import HTTP from '../../common/helpers/HTTP';
import Utils from '../../common/helpers/Utils';
import { FaRegStar } from 'react-icons/fa';

const accentColor = document.querySelector('[data-accentcolor]') ? document.querySelector('[data-accentcolor]').dataset.accentcolor : null;
const demoMode = document.querySelector('[data-demomode]') ? document.querySelector('[data-demomode]').dataset.demomode : false;

const thumbnailStyle = {
    height: '150px',
    transition: '0.3s ease',
    // filter: 'opacity(0.8)',
    objectFit: 'cover'
}

function App() {
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (accentColor) {
            Utils.changeAccentColor(accentColor);
        }

        loadData();

        if (demoMode) {
            notification.open({
                description: <React.Fragment>
                    <Space direction="vertical" size="middle">
                        <div style={{paddingTop: 16}}>
                            We need your support. Please <FaRegStar /> on <a target="_blank" rel="noreferrer" href="https://github.com/arifszn/ezfolio">GitHub</a> to help us increase. <a target="_blank" rel="noreferrer" href="https://github.com/arifszn/ezfolio"><img src="https://img.shields.io/github/stars/arifszn/ezfolio?style=social" alt="Github Star"/></a>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <a href={Routes.web.admin.admin} target="_blank" rel="noreferrer">Visit Admin Panel</a>
                        </div>
                    </Space>
                </React.Fragment>,
                placement: 'bottomRight',
                duration: 0,
                key: 'star-notification'
            });
        }
    }, [])

    const loadData = () => {
        setLoading(true);

        HTTP.get(Routes.api.frontend.projects, {
            isPrivate: false
        })
        .then(response => {
            Utils.handleSuccessResponse(response, () => {
                setData(response.data.payload);

                if (response.data.payload.length) {
                    let newCategories = [...categories];
                    response.data.payload.forEach(row => {
                        JSON.parse(row.categories).map((category) => {
                            newCategories.push(category);
                        })
                    });
                    setCategories([...new Set(newCategories)]);
                }
            })
        })
        .catch(error => {
            Utils.handleException(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="text-center col-md-12">
                        <Space direction="vertical" size={'large'}>
                            {
                                (categories.length !== 0) && (
                                    <div data-aos="zoom-in">
                                        <Radio.Group onChange={(e) => {
                                            if (typeof e.target.value === 'undefined') {
                                                setSelectedCategory(null);
                                            } else {
                                                setSelectedCategory(e.target.value);
                                            }
                                        }}>
                                            <Radio.Button>All</Radio.Button>
                                            {
                                                categories.map((category, index) => (
                                                    <Radio.Button key={index} value={category} style={{textTransform: 'capitalize'}}>{category}</Radio.Button>
                                                ))
                                            }
                                        </Radio.Group>
                                    </div>
                                )
                            }
                            <List
                                grid={{ gutter: 24, xl:4, lg: 4, md: 2, sm: 1, xs: 1 }}
                                dataSource={data.filter(project => selectedCategory === null || (selectedCategory !== null && JSON.parse(project.categories).includes(selectedCategory)))}
                                loading={loading}
                                renderItem={item => (
                                    <List.Item 
                                        style={{marginBottom: '24px'}}
                                        data-aos="fade-up" 
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        <Card
                                            onClick={() => {
                                                setSelectedProject(item);
                                                setModalVisible(true);
                                            }}
                                            loading={loading}
                                            style={{width: '100%'}}
                                            bodyStyle={{padding: '14px'}}
                                            hoverable
                                            className={'z-hover z-shadow'}
                                            bordered={false}
                                            cover={
                                                <div style={{opacity: '0.7'}}>
                                                    <Image
                                                        src={Utils.backend + '/' + item.thumbnail}
                                                        style={thumbnailStyle}
                                                        preview={false}
                                                        placeholder={true}
                                                    />
                                                </div>
                                            }
                                            actions={[
                                                <React.Fragment key="view">
                                                    See Details
                                                </React.Fragment>
                                            ]}
                                        >
                                            <Card.Meta
                                                title={item.title}
                                            />
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </Space>
                    </div>
                </div>
            </div>
            {
                modalVisible && (
                    <ProjectPopup
                        title={selectedProject ? selectedProject.title : ''}
                        project={selectedProject}
                        visible={modalVisible}
                        handleCancel={
                            () => {
                                setModalVisible(false);
                            }
                        }
                    />
                )
            }
        </React.Fragment>
    );
}

if (document.getElementById('react-project-root')) {
   ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('react-project-root')
    ); 
}