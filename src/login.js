import React,{useState,useEffect} from "react";
import {Row,Col,Card, Form, Input, Button } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Login = (props) => {

    const [loginData,setLoginData] = useState({});
    const [data,setData] = useState([]);

    useEffect(() => {debugger
        let list = [];
        if (JSON.parse(localStorage.getItem("data")) !== null) {
            list = JSON.parse(localStorage.getItem("data"));
        }
        setData(list);
    }, []);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLoginData({...loginData,[name]: value});
    }

    const onLogin = () =>{
        const findOfUser = data.find(user => user.email === loginData.email && user.password === loginData.password);
        if(findOfUser){debugger
            alert("Successfully login");
            props.history.push("/dashBord");
        }else{debugger
            alert("Please enter valid data..");
        }
    }

    const  onReg = () => {
        props.history.push("/signUp");
    }

    return (
            <>
                <Row style={{marginTop: 200}}>
                    <Col span={8}/>
                    <Col span={4}>
                        <Card title="Login" bordered={true} style={{borderColor:"#20a8d8"}}>
                            <h5>Sign In to your account</h5><br />
                            <Form
                                initialValues={{remember: true}}
                            >
                                <Form.Item
                                    rules={[{required: true, message: 'Please input your username!'}]}
                                >
                                    <Input  name="email" placeholder="Enter Your Email" autoSave="false"  value={loginData.email || ""} onChange={handleChange} addonBefore={(<UserOutlined />)}/>
                                </Form.Item>

                                <Form.Item
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                >
                                    <Input.Password name="password" placeholder = "Enter Your PassWord" autoSave="false" value={loginData.password || ""}  onChange={handleChange} addonBefore={(<LockOutlined />)}/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={onLogin}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card  bordered={false} style={{backgroundColor: "#20a8d8" ,color: "#fff",height:"100%",width:"100%"}}>
                            <b>Sign Up</b><br /><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p><br />
                            <Button type="primary" onClick={onReg}>
                                Register Now!
                            </Button>
                        </Card>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                </>
    )
}
export default Login;