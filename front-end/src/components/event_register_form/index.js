import React from 'react';
const axios = require('axios').default;

export const EventRegisterForm = ({ position, closeModal, reload }) => {  
  const onSubmit = (event) => {
    event.preventDefault(event);

    const newEvent = {
      type: event.target.type.value,
      description: event.target.description.value,
      latitude: event.target.latitude.value,
      longitude: event.target.longitude.value
    };

    axios.post('/api/v1/events', newEvent)
        .then((response) => {
          console.log('deu certo', response);
          closeModal();
          reload();
        });

  };

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" className="form-control" id="latitude" value={position.latitude} />
      <input type="hidden" className="form-control" id="longitude" value={position.longitude} />

      <div className="form-group">
        <label htmlFor="type">Tipo</label>
        <select id="type" className="form-control">
          <option value="deslizamento">Deslizamento</option>
          <option value="alagamento">Alagamento</option>
          <option value="pessoa_ferida">Pessoa ferida</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea className="form-control" id="description" rows="8"/>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Cadastrar evento
        </button>
      </div>
    </form>
  );
};

export default EventRegisterForm;
