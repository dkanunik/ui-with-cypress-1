abstract class AbstractComponent {
    public readonly open = (): void => {
        throw new Error('A component class instance can not be open within a page instance');
    }
}

export default AbstractComponent;
