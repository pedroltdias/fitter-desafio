const apiUrl = 'http://localhost:4000'

async function getAllTickets() {
  const response = await fetch(`${apiUrl}/tickets`)
  const data = await response.json()
  return data
}

async function getTicket(ticketId: number) {
  const response = await fetch(`${apiUrl}/tickets/${ticketId}`)
  const data = await response.json()
  return data
}

async function createTicket(ticketData: any) {
  const response = await fetch(`${apiUrl}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticketData),
  })
  const data = await response.json()
  return data
}

export { getAllTickets, getTicket, createTicket }
