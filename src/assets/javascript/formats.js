// 所有格式化的方法

export function formatDate (Milliseconds) {
  let generalDate
  if (!Milliseconds) {
    generalDate = 'No Date'
  } else {
    const newDate = new Date(Milliseconds * 1000)
    generalDate = newDate.toLocaleDateString()
  }
  return generalDate
}

// 處理日期的另一種寫法
// export function formatDate (time) {
//   const localDate = new Date(time * 1000)
//   return localDate.toLocaleDateString()
// }
