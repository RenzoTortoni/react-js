import "./Order.css"
import { useParams } from 'react-router-dom'

function Order() {
    const { order } = useParams()

    return (
        <div className="OrderContainer">
            <p className="OrderThanks">¡Gracias por tu compra!</p>
            <p className="Order"> Este es tu comprobante de pago: {orderId}</p>
        </div>
    )
}

export default Order