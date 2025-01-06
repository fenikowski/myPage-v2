import "./styles/sectionTitle.css"

export default function SectionTitle({ text }: { text: string }) {
    return (
        <div className="section-title">
            <p>{text}</p>
        </div>
    )
}