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
