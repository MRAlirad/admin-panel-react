import Button from "../Button"
import  HistoryItem  from "./HistoryItem"

const HistoryContainer = () => {
    return (
        <section className="history-section">
            <div className="title-box">
                <h3>تاریخچه</h3>
                <Button
                    type="icon"
                    color="delftBlue"
                    text="refresh"
                />
            </div>
            <div className="history-container">
                
            </div>
        </section>
    )
}

export default HistoryContainer