"use client"
import { Button, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";

const Mission = () => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        const { email } = values;
        form.resetFields();
    };
    return (
        <div className="bg-primaryColor">
            <div className="container mx-auto ">
                <div className="flex flex-col justify-center items-center py-16">
                    <h1 className="text-4xl font-bold text-white">Stay Updated on Our Mission</h1>
                    <p className="text-neutral-200">Subscribe for the latest updates</p>
                    <ConfigProvider
                        theme={{
                            components: {
                                Form: {
                                    itemMarginBottom: 20,
                                },
                                Input: {
                                    borderRadius: 5,
                                },
                                "Button": {

                                }
                            },
                        }}
                    >
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{ xs: 24, sm: 24, md: 24 }}
                            wrapperCol={{ xs: 24, sm: 24, md: 24 }}
                            style={{ maxWidth: "50%", width: "50%" }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your Email!" },
                                ]}
                            >
                                <div className="flex justify-start items-center gap-2">
                                    <Input placeholder="Email" />
                                    <Button block htmlType="submit" className="bg-red-500 text-white px-4 py-2 rounded-xl">
                                        Subscribe
                                    </Button>
                                </div>
                            </Form.Item>


                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default Mission;