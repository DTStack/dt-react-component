import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';
import LZString from 'lz-string';

SyntaxHighlighter.registerLanguage('jsx', jsx);

class CodeSandBoxDefine extends React.Component<any, any> {
    form = null

    handleClick = () => {
        const formDOMNode = ReactDOM.findDOMNode(this.form);
        if (formDOMNode) {
            formDOMNode.submit();
        }
    }

    compress = (string) => {
        return LZString.compressToBase64(string)
            .replace(/\+/g, '-') // Convert '+' to '-'
            .replace(/\//g, '_') // Convert '/' to '_'
            .replace(/=+$/, ''); // Remove ending '='
    }

    render() {
        const { formValue, children } = this.props
        return (
            <div onClick={this.handleClick}>
                <form
                    ref={ref => this.form = ref}
                    style={{ display: 'none' }}
                    action="https://codesandbox.io/api/v1/sandboxes/define"
                    method="POST"
                    target="_blank"
                >
                    <input
                        type="hidden"
                        name="parameters"
                        value={this.compress(JSON.stringify(formValue))}
                    />
                </form>
                {children}
            </div>
        );
    }
}

class ExampleCode extends React.Component<any, any> {
    render() {
        const { code } = this.props
        return (
            <section
                style={{ height: '100%' }}
            >
                <div style={{height: '100%', position: 'relative'}}>
                    <div style={{ height: '100%' }}>
                        <SyntaxHighlighter
                            language="jsx"
                            style={syntaxStyle}
                            customStyle={{
                                fontSize: 12,
                                height: '100%',
                                margin: 0,
                            }}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </section>
        )
    }
}

class ExampleContainer extends React.Component<any, any> {
    state = {
        codeShow: false
    }
    toggleCode = () => {
        this.setState({
            codeShow: !this.state.codeShow
        })
    }
    dependenciesFromCode = code => {
        const dependencies = code.split('\n').reduce(
            (acc, line) => {
                const matches = line.match(/import .+? from '(.+)';$/);
                if (matches && matches[1] && !line.includes('antd')) {
                    const [dep] = matches[1].split('/');
                    if (dep) {
                        acc[dep] = 'latest';
                    }
                }
                return acc;
            },
            { react: 'latest', 'react-dom': 'latest', antd: '3.26.13', 'dt-react-component': 'latest' },
        );
        return dependencies
    }
    handleCodeInCodeSandBox = () => {
        const { code, otherDependencies, functionCode = '' } = this.props
        const c = `import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

${otherDependencies}
import 'dt-react-component/lib/style/index.css';

class App extends React.Component {
    ${functionCode}
    render() {
        return (
            ${code}
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
        `
        return c
    }
    formValueFromCode = code => {
        const dependencies = this.dependenciesFromCode(code)
        const html = `<div id="root" style="padding: 24px"></div>`
        const codeInCodeSandBox = this.handleCodeInCodeSandBox()
        const formValue = {
            files: {
                'package.json': {
                    content: {
                        dependencies,
                    },
                },
                'index.css': {
                    content: '',
                },
                'index.js': {
                    content: codeInCodeSandBox,
                },
                'index.html': {
                    content: html,
                },
            },
        }
        return formValue
    }
    renderCodeSandBox = () => {
        const { code, hasCodeSandBox } = this.props
        const formValue = this.formValueFromCode(code)
        const codeSandeBox = hasCodeSandBox ? (
            <CodeSandBoxDefine formValue={formValue}>
                <img
                    className='story-example_codesandbox'
                    src="https://gw.alipayobjects.com/zos/rmsportal/aaYmtdDyHSCkXyLZVgGK.svg"
                    title="Open in CodeSandBox"
                />
            </CodeSandBoxDefine>
        ) : null

        return codeSandeBox
    }
    render() {
        const { codeShow } = this.state
        const example = codeShow ? <ExampleCode code={this.handleCodeInCodeSandBox()}></ExampleCode> : null
        const toggleCodeSrc = codeShow ? 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg' : 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg'

        const codeSandeBox = this.renderCodeSandBox()
        return (
            <div className='story-example_container'>
                <div className='story-example_border'>
                    <div className='story-example_display'>
                        {this.props.children}
                    </div>
                    <div className='story-example_actions'>
                        {codeSandeBox}
                        <div className='story-example_toggle-code' onClick={this.toggleCode}>
                            <img width={20} height={16} src={toggleCodeSrc} alt="toggle code"/>
                        </div>
                    </div>
                </div>
                {example}
            </div>
        )
    }
}

export default ExampleContainer