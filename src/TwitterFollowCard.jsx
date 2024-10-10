export function TwitterFollowCard ({children = 'Unknown', userName = 'unknown', isFollowing}) {
    const formattedUserName = `@${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${userName}`} alt={`"Profile picture of ${children}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span>{formattedUserName}</span>
                </div>
            </header>
            <aside>
                <Button className={"tw-followCard-btn"} text="Seguir" />
            </aside>
        </article>
    )
}

const Button = ({className, text}) => {
    return (
    <button className={className}>{text}</button>

    )
}