import "./PlusButton.scss"

export default function PlusButton({ onClick, className, id }){
    
    return <div className='plus-button'>
        <button onClick={onClick} className={className} id={id} ></button>
    </div>

}