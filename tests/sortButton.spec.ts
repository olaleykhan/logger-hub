// import { render, fireEvent } from '@testing-library/svelte';
// import SortButton from '$lib/SortButton.svelte';

// describe('SortButton Component', () => {
//   test('should display ascending arrow when asc is true', () => {
//     const { getByText } = render(SortButton, { asc: true, sort: 'login', activeSort: 'login' });
//     expect(getByText('▲')).toBeInTheDocument();
//   });

//   test('should display descending arrow when asc is false', () => {
//     const { getByText } = render(SortButton, { asc: false, sort: 'login', activeSort: 'login' });
//     expect(getByText('▼')).toBeInTheDocument();
//   });

//   test('should call onClick when clicked', async () => {
//     const handleClick = jest.fn();
//     const { getByRole } = render(SortButton, { asc: true, sort: 'login', activeSort: 'login', onClick: handleClick });

//     const button = getByRole('button');
//     await fireEvent.click(button);

//     expect(handleClick).toHaveBeenCalled();
//   });

//   test('should highlight arrow when active', () => {
//     const { getByText } = render(SortButton, { asc: true, sort: 'login', activeSort: 'login' });
//     expect(getByText('▲')).toHaveClass('text-blue-500');
//   });

//   test('should not highlight arrow when inactive', () => {
//     const { getByText } = render(SortButton, { asc: true, sort: 'login', activeSort: 'type' });
//     expect(getByText('▲')).toHaveClass('text-gray-500');
//   });
// });
