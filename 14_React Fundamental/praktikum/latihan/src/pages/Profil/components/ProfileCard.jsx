

export default function ProfilCard ({user}) {
    
    
    return (
        <div className="{styles.card}" style={{ marginLeft: 30, display: "inline-block"}}>
            <img className="{styles.avatar}" src={user.avatar} alt="avatar" />
            <div className="{styles.cardContent}">
                <h4>{user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
            </div>
        </div>
    )
}