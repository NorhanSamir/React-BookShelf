import { Provider } from "react-redux";
import  configureStore  from '../../Store/store';
import '@testing-library/jest-dom';
import { Home } from "./Home";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

describe("HomeComponent Test", () => {
    let originFetch:any;
    beforeEach(() => {
      originFetch = (global as any).fetch;
    });
    afterEach(() => {
      (global as any).fetch = originFetch;
    });
    it('should pass', async () => {
      const fakeResponse = { title: 'example text' };
      const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
      const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
      (global as any).fetch = mockedFetch;
       render(     <Provider store={configureStore} >
        <Home></Home>
        </Provider>);
      expect(mockedFetch).toBeCalledTimes(1);
    });
  

});
