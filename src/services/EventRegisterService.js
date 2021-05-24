import api from './index'


const EventRegisterService = () => ({
  createEvent(data)  {
    return api.post('/events', data)
  },
  
  updateEvent(data) {
    return api.put('/events', data)
  },
  
  deleteEvent(id) {
    return api.delete(`/events/${id}`)
  },
  
  getEvent(id) {
    return api.get(`/events/${id}`)
  },
  
  getAllEvents()  {
    return api.get(`/events/`)
  },
  
  getEventByUserId(id) {
    return api.get(`/events/user/${id}`)
  },
})

export default EventRegisterService();

