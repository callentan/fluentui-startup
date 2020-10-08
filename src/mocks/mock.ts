import fetchMock from 'fetch-mock';

function mocks() {
    fetchMock.mock('/mock/projects/allprojects', () => {
        return null;
    });

}

export function initMocks() {
    mocks();
}
