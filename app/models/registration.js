import DS from 'ember-data';
import Validator from '../mixins/model-validator';

export default DS.Model.extend(Validator, {
    contactName: DS.attr('string'),
    contactEmail: DS.attr('string'),
    contactAffiliation: DS.attr('string'),

    directSource: DS.attr('boolean'),

    sourceName: DS.attr('string'),
    sourceDescription: DS.attr('string'),
    sourceBaseUrl: DS.attr('string', { defaultValue: '' }),
    sourceOAI: DS.attr('boolean'),
    sourceRateLimit: DS.attr('string', { defaultValue: '' }),
    sourcePreferredMetadataPrefix: DS.attr('string', { defaultValue: '' }),
    sourceDocumentation: DS.attr('string', { defaultValue: '' }),
    sourceDisallowedSets: DS.attr('string', { defaultValue: '' }),
    sourceAdditionalInfo: DS.attr('string', { defaultValue: '' }),

    status: DS.attr('string'),
    submitted_at: DS.attr('string'),

    validations: {
        contactName: {
            presence: true
        },
        contactEmail: {
            presence: true,
            email: true
        },
        contactAffiliation: {
            presence: true
        },

        sourceName: {
            presence: true
        },
        sourceDescription: {
            presence: true
        },
        sourceBaseUrl: {
            presence: true,
            URL: true
        }
    }
});