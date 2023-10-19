
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CirclesWithBar } from 'react-loader-spinner'
const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //  fetch('https://openapi.programming-hero.com/api/phones?search=iphone').then(res=>res.json()).then(data=> setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesWithFakeData = phonesData.map(phones => {
                    const obj = {
                        name: phones.phone_name,
                        price: parseInt(phones.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
                setLoading(false)
            })
    }, []);
    console.log(phones);
    return (
        <div>
           <div className="w-fit mx-auto"> {loading && <CirclesWithBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
            />}
            </div>
            <div className="w-fit mx-auto">
            <BarChart
                width={1000}
                height={400}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
            </div>
        </div>
    );
};

export default Phones;