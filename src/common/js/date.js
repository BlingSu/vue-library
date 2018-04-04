export default function formatDate (date) {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() +1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() +1
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
  const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
  const minute = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
  const second = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
