import { iTicket } from '../types/iTicket'

const apiUrl = 'http://localhost:4000'

async function getAllTickets() {
  const response = await fetch(`${apiUrl}/tickets`)
  return await response.json()
}

async function getTicket(ticketId: number) {
  const response = await fetch(`${apiUrl}/tickets/${ticketId}`)
  return await response.json()
}

async function createTicket(ticketData: any) {
  const response = await fetch(`${apiUrl}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticketData),
  })
  return await response.json()
}

async function buyTickets(tickets: iTicket[]) {
  try {
    const response = await fetch(`${apiUrl}/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tickets),
    })
    if (response.ok) {
      alert('Bilhetes comprados com sucesso!')
    } else {
      alert('Erro ao comprar bilhetes. Tente novamente mais tarde.')
    }
  } catch (error) {
    alert('Erro ao comprar bilhetes. Tente novamente mais tarde.')
  }
}

export { getAllTickets, getTicket, createTicket, buyTickets }
