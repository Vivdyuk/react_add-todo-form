import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export const TodoList = ({ todos }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="list__item">
          <p>
            <strong>
              Title:
            </strong>
            {todo.title}
          </p>
          <p>
            <strong>
              Author:
            </strong>
            {`${todo.user.name} (${todo.userId})`}
          </p>
          <p>
            <strong>Completed:</strong>
            {todo.completed ? 'done' : 'in progress'}
          </p>
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
          geo: PropTypes.shape({
            lat: PropTypes.string.isRequired,
            lng: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
        company: PropTypes.shape({
          name: PropTypes.string.isRequired,
          catchPhrase: PropTypes.string.isRequired,
          bs: PropTypes.string.isRequired,
        }).isRequired,

      }).isRequired,
    }).isRequired,
  ).isRequired,
};