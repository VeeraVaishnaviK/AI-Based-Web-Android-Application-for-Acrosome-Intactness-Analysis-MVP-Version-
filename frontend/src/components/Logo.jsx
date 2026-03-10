import logoImg from '../assets/logo.png';
import './Logo.css';

export default function Logo({ size = 'md' }) {
    const heights = {
        sm: 48,
        md: 72,
        lg: 100,
        xl: 140,
    };
    const h = heights[size] || heights.md;

    return (
        <div className="logo-container">
            <img
                src={logoImg}
                alt="NexAcro"
                className="logo-icon"
                style={{ height: h, width: 'auto' }}
            />
        </div>
    );
}
