const TrackPrint = () => {
    const handleTrackPrint = () => {
        window.print()
    }
    return (
        <button onClick={handleTrackPrint} className="print-button">
            <span className="print-icon"></span>
        </button>
    )
}
export default TrackPrint