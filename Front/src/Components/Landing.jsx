import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <img src="..\Utils\cc53145fafdc360dd9a7ad9fecc852ff.gif" alt="" />
            <br />
            <Link to="/home">
                <a>
                    <img src="..\Utils\images (1).png" alt="" />
                </a>
            </Link>
        </div>
    )
}


export default Landing;