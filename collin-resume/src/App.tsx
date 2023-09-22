import React from 'react';
import { ResumeLayout } from './layout/Layout';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          colorPrimaryHover: '#00b96b'
        }
      }}
    >
      <ResumeLayout>
        <p>hello world</p>
      </ResumeLayout>
    </ConfigProvider>
  )
}

export default App
