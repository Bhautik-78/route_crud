import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
import {Row, Col, Button, message, Popconfirm, Input, Tooltip} from 'antd';
import {UserOutlined, SearchOutlined} from "@ant-design/icons";
import Table from "antd/lib/table";

const User = (props) => {

    const history = useHistory()
    const [searchDetails, setSearchDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        age: "",
        address: "",
        gender: "",
    });
    let [data, setData] = useState([]);
    let [dublicateList,setDublicateList] = useState([]);

    useEffect(() => {
        let list = [];
        if (JSON.parse(localStorage.getItem("data")) !== null) {
            list = JSON.parse(localStorage.getItem("data"));
        }
        setData(list);
        setDublicateList(list);
    }, [])

    const onEdit = (record) => {
        props.history.push(`/editUserDetails/${record.id}`);
    }

    const onDelete = (record) => {
        if (message.success("success the delete your record")) {
            const filterData = data.filter(index => index !== record);
            localStorage.setItem('data', JSON.stringify(filterData));
            setData(filterData);
        }
    }

    const T = 'Are you sure to delete this task?';

    const onAdd = () => {
        history.push(`/signUp`);
    }

    const onLogOut = () => {
        localStorage.setItem("token", "")
        history.push(`/login`);
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setSearchDetails({...searchDetails, [name]: value})
    }

    const onSearch = e => {
        let searchValues = searchDetails;
        let filterArray = []
        const d = dublicateList.filter(record => {
            if(searchValues.firstname){
                filterArray = record.firstname.toLowerCase().includes(searchValues.firstname.toLowerCase())
            }
            if(searchValues.lastname){
                filterArray = record.lastname.toLowerCase().includes(searchValues.lastname.toLowerCase())
            }
            if(searchValues.email){
                filterArray = record.email.toLowerCase().includes(searchValues.email.toLowerCase())
            }
            if(searchValues.age){
                filterArray = record.age.toString().toLowerCase().includes(searchValues.age.toLowerCase())
            }
            if(searchValues.address){
                filterArray = record.address.toLowerCase().includes(searchValues.address.toLowerCase())
            }
            if(searchValues.gender){
                filterArray = record.gender.toLowerCase() === searchValues.gender.toLowerCase()
            }
            return  filterArray
        });
        setData(d);
    }

    const columns = [
        {
            title: 'ID',
            width: 120,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'First Name',
            width: 120,
            dataIndex: 'firstname',
            key: 'firstname',
            fixed: 'left',
        },
        {
            title: 'Last Name',
            width: 100,
            dataIndex: 'lastname',
            key: 'lastname',
            fixed: 'left',
        },
        {
            title: 'Email',
            width: 100,
            dataIndex: 'email',
            key: 'email',
            fixed: 'left',
        },
        {
            title: 'MobileNumber',
            width: 100,
            dataIndex: 'phone',
            key: 'phone',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Address',
            width: 100,
            dataIndex: 'address',
            key: 'address',
            fixed: 'left',
        },
        {
            title: 'Gender',
            width: 100,
            dataIndex: 'gender',
            key: 'gender',
            fixed: 'left',
        },
        {
            title: 'Country',
            width: 100,
            dataIndex: 'country',
            key: 'country',
            fixed: 'left',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            render: (text, record) => (
                <>
                    <Button type="primary" onClick={() => onEdit(record)}>
                        Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Popconfirm placement="right" title={T} onConfirm={() => onDelete(record)} okText="Yes"
                                cancelText="No">
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Popconfirm>

                </>
            )
        },


    ]

    return (
        <>
            <Row style={{marginTop: 100}}>
                <Col span={4}/>
                <Col span={16} className="mt-3">
                    <Row>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.firstname} name="firstname" placeholder="firstName" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.lastname} name="lastname" placeholder="lastName" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.email} name="email" placeholder="email" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.age} name="age" placeholder="age" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.address} name="address" placeholder="address" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                        <Col span={4}>
                            <Input size="small" value={searchDetails.gender} name="gender" placeholder="gender" prefix={<UserOutlined/>} onChange={handleChange}/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Tooltip title="search">
                            <Button type="primary" shape="circle" icon={<SearchOutlined/>} onClick={onSearch}/>
                        </Tooltip>
                    </Row><br />

                    <Row>
                        <Col span={4}>
                            <Button type="primary" onClick={onAdd}>Add New</Button>
                        </Col>
                        <Col span={16}>
                            <h1 style={{textAlign: "center"}}>User</h1>
                        </Col>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{pageSize: 10}}
                        rowKey={'key'}
                    />
                    <Button type="primary" onClick={onLogOut}>Log Out</Button>
                </Col>
            </Row>
        </>
    )
}

export default User;