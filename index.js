const core = require('@actions/core');
const github = require('@actions/github');

const commaSeparatedRequiredLabels = core.getInput('one-of');

if (commaSeparatedRequiredLabels) {
    const requiredLabels = commaSeparatedRequiredLabels.split(',')
    console.log('required labels are: ' + requiredLabels)
    console.log(github)
    const labels = github.payload.pull_request.labels
    console.log('labels:'+ labels)
    const labelNames = labels.map(label => label.name)
    console.log('labels on this pull request are: ' + labelNames)
    
    if (!(requiredLabels.some(requiredLabel => labelNames.includes(requiredLabel)))) {
        core.setFailed('Your pull request should contain one of the required labels: ' + requiredLabels);
    }
}
