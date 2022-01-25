import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, textarea, button {
    font-family: 'Raleway', serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  .text-decoration-none {
    text-decoration: none;
  }

  .title-date, .title-event, .title-event-big {
    font-family: Raleway;
    font-style: normal;
  }
  .title-date {
    font-weight: 800;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
  }

  .title-event, .title-event-big {
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.8);
  }

  .title-event-big {
    font-size: 36px;
    line-height: 42px;
  }

  .flex-horizontal {
    display: flex;
    justify-content: space-between;
  }

  .paid .total {
		text-decoration: line-through;
	}

  .icon-spin {
    -webkit-animation: icon-spin 2s infinite linear;
            animation: icon-spin 2s infinite linear;
  }

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }
`;
