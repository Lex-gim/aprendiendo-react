import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <>
            <section className='tw-followCard-list'>
                <TwitterFollowCard userName={"hbkjodye"} isFollowing>
                    Migue
                </TwitterFollowCard>
                <TwitterFollowCard userName={"Sonder"} isFollowing={false}>
                    Sonder
                </TwitterFollowCard>
                <TwitterFollowCard userName={"xxxtentacion"} isFollowing>
                    XXXTENTACION
                </TwitterFollowCard>
                <TwitterFollowCard userName={"asvpxrocky"} isFollowing={false}>
                    LORD PRETTY FLACKO JODYE II
                </TwitterFollowCard>
                <TwitterFollowCard isFollowing={false}>
                </TwitterFollowCard>
            </section>
        </>
    )
}
