import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react'


import "@testing-library/jest-dom/extend-expect";

test("header renders correctly", () => {
    const { getByTestId } = render(<Counter />)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter");
})

test("Counter starts form 0", () => {
    const { getByTestId } = render(<Counter />)
    const CounterEl = getByTestId("counter")

    expect(CounterEl.textContent).toBe("0");
})

test("Counter initial value 1", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")

    // expect(CounterEl.textContent).toBe("0");  (it cant be 1 alwys as its a value nd it must be changed by user)
    expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
    const { getByTestId } = render(<Counter />)
    const addbtn = getByTestId("add-btn")

    // expect(CounterEl.textContent).toBe("0");  (it cant be 1 alwys as its a value nd it must be changed by user)
    expect(addbtn.textContent).toBe("+");
})

test("subtract button renders with -", () => {
    const { getByTestId } = render(<Counter />)
    const subtractbtn = getByTestId("subtract-btn")

    // expect(CounterEl.textContent).toBe("0");  (it cant be 1 alwys as its a value nd it must be changed by user)
    expect(subtractbtn.textContent).toBe("-");
})


//fireEvent is used on functional components checking
test("changing value of input works correct", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5")

})

test("clicking on + button adds 1 to counter", () => {
    const { getByTestId } = render(<Counter />)
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1")
})

test("clicking on - button subtract 1 from counter", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add btn works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract btn works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-5")
})



test("adding and subtracting leads to correct counter number", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtract-btn")
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.textContent).toBe("20");
})

test("counter contains correct classname", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subtract-btn")
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input");

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    });

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("green");

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.className).toBe("red")
})

