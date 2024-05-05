// 지금시간 구하기
// 1초마다 시간 갱신
// JS로 HTML 갱신

const clock = document.querySelector('.clock')

const pad0 = (num) => String(num).padStart(2, '0')
const getTime = () => {
  const now = new Date()
  const hours = pad0(now.getHours())
  const minutes = pad0(now.getMinutes())
  const seconds = pad0(now.getSeconds())
  const time = `${hours}:${minutes}:${seconds}`

  clock.textContent = time
}

getTime()

setInterval(() => {
  getTime()
}, 1000)
