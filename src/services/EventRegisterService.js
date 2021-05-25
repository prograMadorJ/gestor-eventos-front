import api, {jwt} from './index'



const EventRegisterService = () => ({
  createEvent(data, token)  {
    return api.post('/events', data, jwt(token))
  },
  
  updateEvent(data, token) {
    return api.put('/events', data, jwt(token))
  },
  
  deleteEvent(id, token) {
    return api.delete(`/events/${id}`, jwt(token))
  },
  
  getEvent(id, token) {
    return api.get(`/events/${id}`, jwt(token))
  },
  
  getAllEvents(token)  {
    return api.get(`/events/`, jwt(token))
  },
  
  getEventByUserId(id, token) {
    return api.get(`/events/user/${id}`, jwt(token))
  },
})

export default EventRegisterService();

