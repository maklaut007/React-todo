import PropTypes from 'prop-types';

const myStoreProps = {
  myStore: PropTypes.shape({
    todos: PropTypes.shape({
      dateFocus: PropTypes.string,
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          date: PropTypes.instanceOf(Date),
        }),
      ),
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          text: PropTypes.string,
          isCompleted: PropTypes.bool,
          dateId: PropTypes.string,
        }),
      ),
    }),
  }),
};

export default myStoreProps;
