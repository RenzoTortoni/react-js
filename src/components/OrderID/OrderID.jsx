import "./OrderID.css"
import { useParams } from 'react-router-dom'

function OrderID() {
    const { orderId } = useParams()

    return (
        <div className="OrderIdContainer">
            <p className="OrderIdThanks">¡Gracias por tu compra!</p>
            <p className="OrderId"> Este es tu comprobante de pago: {orderId}</p>
        </div>
    )
}

export default OrderID