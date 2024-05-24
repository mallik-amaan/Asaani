import image from "../../assets/CustomerPhoto/imageIndex.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import dateFormat from "../../utils/dateFormat.js";

function OrderHistory() {
    const params = useParams();
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getOrderHistoryById(params.userId);
    }, [params.userId]);

    const getOrderHistoryById = async (userId) => {
        try {
            setLoading(true);
            const result = await axios.get(`http://localhost:4000/orderHistory/${userId}`);
            setOrder(result.data.result);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // Set loading to false in case of error as well
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-col">
            {order.length === 0 ? (
                <div className="p-6 w-[50vw] ml-10 mb-8 bg-white border border-grey300 rounded-lg">
                    <h1 className="text-grey700 text-2xl font-normal text-center">
                        No repair history
                    </h1>
                </div>
            ) : (
                <div>
                    {order.map((item) => (
                        <div key={item.order_history_id} className="p-6 mb-4 bg-white border border-grey300 rounded-lg">
                            <h2 className="text-grey700 text-xl font-medium">
                                Order Number: {item.order_number}
                            </h2>
                            <p className="text-grey600">
                                Service ID: {item.service_id}
                            </p>
                            <p className="text-grey600">
                                Serviceman Detail ID: {item.serviceman_detail_id}
                            </p>
                            <p className="text-grey600">
                                Status: {item.status}
                            </p>
                            <p className="text-grey600">
                                User ID: {item.user_id}
                            </p>
                            <p className="text-grey600">
                                Checkout ID: {item.checkout_id}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrderHistory;
