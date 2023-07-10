export default function PhoneText(props) {
  const { text } = props

  return (
    <a href={`tel:${text}`} className="underline text-cyan-500">{text}</a>
  )
}
