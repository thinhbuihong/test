import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from '../components/TestAxios'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios')

it('should display a loading text', () => {

  const { getByTestId } = render(<TestAxios />)

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})

it('should load and display the data', async () => {
  const url = '/greeting'
  const { getByTestId } = render(<TestAxios url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByTestId('fetch-data'))

  const greetingData = await waitForElement(() => getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(greetingData).toHaveTextContent('hello there')
  // If the HTTP request has been done correctly
  // If the HTTP request has been done with the url
  // If the data fetched matches the expectation.
})