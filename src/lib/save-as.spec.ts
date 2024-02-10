import {SaveAs} from './save-as';

// @ts-ignore
const mockDocument: Document = {
    createElement: jest.fn(),
    body: {
        appendChild: jest.fn(),
        removeChild: jest.fn()
    }
} as any;

/**
 * Tests for SaveAs function in save-as file.
 */
describe('SaveAs function', () => {
    it('should create an anchor element with the given file path and attach it to the body', () => {
        const filePath = 'test_path';
        const mockElement = {
            href: '',
            target: '',
            click: jest.fn()
        };

        (mockDocument.createElement as jest.Mock).mockReturnValueOnce(mockElement);

        SaveAs(filePath, mockDocument);

        expect(mockDocument.createElement).toHaveBeenCalledWith('a');
        expect(mockElement.href).toBe(filePath);
        expect(mockElement.target).toBe('_blank');
        expect(mockDocument.body.appendChild).toHaveBeenCalledWith(mockElement);
        expect(mockElement.click).toHaveBeenCalledTimes(1);
        expect(mockDocument.body.removeChild).toHaveBeenCalledWith(mockElement);
    });

    it('should force download if filePath and forceDownloadAndSetName parameters are provided', () => {
        const filePath = 'test2_path';
        const forceDownloadAndSetName = 'forced_download_name';
        const mockElement = {
            href: '',
            target: '',
            click: jest.fn(),
            download: ''
        };

        (mockDocument.createElement as jest.Mock).mockReturnValueOnce(mockElement);

        SaveAs(filePath, mockDocument, forceDownloadAndSetName);

        expect(mockElement.download).toBe(forceDownloadAndSetName);
    });
});