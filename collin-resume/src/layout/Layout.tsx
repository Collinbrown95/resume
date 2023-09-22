import React from 'react';

import { Layout, FloatButton } from 'antd';

import { UserOutlined, ToolOutlined, CodeOutlined, GithubOutlined, LinkedinOutlined, BookOutlined, TrophyOutlined, BuildOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

export const ResumeLayout: React.FC<{ children: React.ReactNode }> = () => {

    return (
        <Layout>
            <FloatButton.Group>
                <FloatButton
                    tooltip="Overview"
                    icon={<UserOutlined />}
                />
                <FloatButton
                    tooltip="Skills"
                    icon={<ToolOutlined />}
                />
                <FloatButton
                    tooltip="Work Experience"
                    icon={<CodeOutlined />}
                />
                <FloatButton
                    tooltip="Education"
                    icon={<BookOutlined />}
                />
                <FloatButton
                    tooltip="Projects"
                    icon={<BuildOutlined />}
                />
                <FloatButton
                    tooltip="Github Profile"
                    icon={<GithubOutlined />}
                />
                <FloatButton
                    tooltip="LinkedIn Profile"
                    icon={<LinkedinOutlined />}
                />
            </FloatButton.Group>
            <Content>
            </Content>
        </Layout>
    );
}
