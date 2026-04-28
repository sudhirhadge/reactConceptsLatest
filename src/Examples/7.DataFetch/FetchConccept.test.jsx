import { render, screen } from '@testing-library/react';
import FetchConcept from './FetchConccept';

describe('FetchConcept', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('shows loading initially', () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => [],
        });

        render(<FetchConcept />);

        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    test('renders data after successful fetch', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
            ],
        });

        render(<FetchConcept />);

        expect(await screen.findByText(/Post 1/i)).toBeInTheDocument();
        expect(await screen.findByText(/Post 2/i)).toBeInTheDocument();
    });

    test('handles API error (non-OK response)', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: false,
        });

        render(<FetchConcept />);

        expect(
            await screen.findByText(/There is some network issue/i)
        ).toBeInTheDocument();
    });

    test('handles fetch rejection (network error)', async () => {
        vi.spyOn(global, 'fetch').mockRejectedValue(
            new Error('Failed to fetch')
        );

        render(<FetchConcept />);

        expect(
            await screen.findByText(/Failed to fetch/i)
        ).toBeInTheDocument();
    });
});