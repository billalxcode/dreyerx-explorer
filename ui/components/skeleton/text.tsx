export default function SkeletonText(props: { className?: string }) {
    return (
        <div className={`animate-pulse ${props.className}`}>
            <div className="bg-white/20 h-5 w-1/2 rounded-lg"></div>
        </div>
    );
}
