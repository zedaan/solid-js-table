import { styled } from 'solid-styled-components';

export default styled('div')`
  display: flex;

  .app__content {
    padding: 30px;
    flex: 1;
    overflow-x: hidden;
    height: 100vh;

    .main--heading {
      margin-bottom: 30px;
      color: ${({ theme }) => theme?.colors?.primaryText};
      display: flex;
      justify-content: space-between;
    }
  }
`;
