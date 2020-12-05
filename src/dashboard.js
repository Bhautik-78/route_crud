import React from  'react';
import {Row,Col} from 'antd';

const Dashboard = () => {
    return(
        <>
            <Row style={{marginTop: 200}}>
                <Col span={8} />
                <Col span={8}>
                    <h1 style={{textAlign: "center"}}>Your Login Is SuccessFully</h1>
                </Col>
                <Col span={8} />
            </Row>
        </>
    )
}

export default Dashboard;