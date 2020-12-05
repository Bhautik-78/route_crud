import React, {useState, useEffect} from "react";
import {Row, Col, Button,message,Popconfirm} from 'antd';
import Table from "antd/lib/table";

const User = (props) => {

    let [data, setData] = useState([]);

    useEffect(() => {
        let list = [];
        if (JSON.parse(localStorage.getItem("data")) !== null) {
            list = JSON.parse(localStorage.getItem("data"));
        }
        setData(list);
    }, [])

    const onEdit = (record) => {
        props.history.push(`/editUserDetails/${record.id}`);
    }

    const onDelete = (record) => {
            if(message.success("success the delete your record")){
                const filterData = data.filter(index => index !== record);
                localStorage.setItem('data', JSON.stringify(filterData));
                setData(filterData);
            }

    }

    const T = 'Are you sure to delete this task?';

    const onAdd = () => {
        props.history.push(`/signUp`);
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
                    <Popconfirm placement="right" title={T} onConfirm={() => onDelete(record)} okText="Yes" cancelText="No">
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
                </Col>
            </Row>
        </>
    )
}

export default User;