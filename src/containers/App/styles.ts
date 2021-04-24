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

    .heading {
      font-size: 2em;
      color: ${({ theme }) => theme?.colors.primaryText};
    }

    .sub--heading {
      font-size: 1em;
      color: ${({ theme }) => theme?.colors.primaryText};
      margin-bottom: 5px;
      margin-top: 40px;
    }


    .btn-group {
      display: flex;
      max-width: 1024px;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      h4 {
        color: ${({ theme }) => theme.colors.primaryText};
        margin: 10px 0;
        padding-left: 15px;
        padding-bottom: 10px;
        font-size: 1em;
        font-weight: 300;
      }
    }
  }

  .btn---demo {
    max-width: 900px;
    padding-right: 40px;
    
    button {
      margin: 40px 0;
    }
  }
`;
