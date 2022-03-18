export default StartPage

function StartPage() {
    return (
        <div className="inicio">
            <Logo />
            <Titulo />
            <StartButton />
        </div>


    )
}
function Logo() {
    return (
        <div className="logo">

            <img src="imgs/logo.png" />
        </div>
    )
}
function Titulo() {
    return (
        <div className="title">ZapRecall</div>
    )
}
function StartButton() {
    return (
        <div className="startButton">
            <button>Iniciar Recall!</button>
        </div>
    )
}