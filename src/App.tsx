import React, { useEffect } from 'react'
import './styles/style.sass'
import News from './components/News/News'
import { Space } from 'antd'
import Paginator from './components/Paginator/Paginator'
import Wrapper from './components/Wrapper/Wrapper'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Space direction='vertical' size="middle" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px'
              
          }}>
            <Wrapper />
            <Routes>
              <Route index element={<News />} />
            </Routes>
            <Paginator />
          </Space>
      </BrowserRouter>
    </div>
  );
}

export default App;
