/*
  - Copyright (c) 2014-2016 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-common-ui.
  -
  - casper-common-ui is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-common-ui  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-common-ui.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

window.Casper = window.Casper || {};
Casper.locale = window.localStorage.getItem('Casper-Locale') || 'pt';
Casper.i18nData =  {
  i18n_print_job: {
    en: 'Print job',
    pt: 'Tarefa impressão'
  },
  i18n_close_and_cancel: {
    en: 'Close and cancel',
    pt: 'Fechar e cancelar'
  },
  i18n_cancel: {
    en: 'Cancel',
    pt: 'Cancelar'
  },
  i18n_error: {
    en: "Error",
    pt: "Erro"
  },
  i18n_waiting_on_queue: {
    en: 'Waiting on queue',
    pt: 'Em fila de espera'
  },
  i18n_internal_error: {
    en: 'Internal error',
    pt: 'Error interno'
  },
  i18n_submit_job_error$tube: {
    en: 'Job submit failed ({tube} queue})',
    pt: 'Erro ao submeter tarefa (fila {tube})'
  },
  i18n_websocket_disconnected: {
    en: 'Connection interrupted, please try again',
    pt: 'Falha de comunicação, por favor tente de novo'
  },
  i18n_invalid_email_or_password: {
    en: 'Invalid email or password',
    pt: 'email ou senha inválida'
  }
};

Casper.uploadI18n = {
  pt: {
    dropFiles: {
      one: 'Arraste ficheiro para aqui...',
      many: 'Arraste ficheiros para aqui...'
    },
    addFiles: {
      one: 'Abrir',
      many: 'Escolher ficheiros'
    },
    cancel: 'Cancelar',
    error: {
      tooManyFiles: 'Demasiados ficheiros.',
      fileIsTooBig: 'O ficheiro é demasiado grande.',
      incorrectFileType: 'Tipo ficheiro incorrecto.'
    },
    uploading: {
      status: {
        connecting: 'Estabelecendo ligação ...',
        stalled: 'Transferência parada.',
        processing: 'Processando ficheiro ...',
        held: 'Em espera'
      },
      remainingTime: {
        prefix: 'tempo de espera: ',
        unknown: 'tempo de espera desconhecido'
      },
      error: {
        serverUnavailable: 'Servidor indisponível',
        unexpectedServerError: 'Erro inesperado no servidor',
        forbidden: 'Não autorizado'
      }
    },
    units: {
      size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    }
  }
};

Casper.I18n = (superClass) => {

  class I18n extends superClass {

    i18nUpdateUpload (vaadinUpload) {
      var resources  = Casper.uploadI18n[Casper.locale]
                    || Casper.uploadI18n[Casper.locale.substring(0,2)];

      if ( resources !== undefined ) {
        vaadinUpload.i18n = resources;
      }
    }

    i18n (message, args) {
      var resources = Casper.i18nData[message];
      if ( resources !== undefined ) {
        var localizedMessage  = resources[Casper.locale]
                             || resources[Casper.locale.substring(0,2)]
                             || resources['en']
                             || message;

      } else {
        return message;
      }
      if ( args === undefined || (Object.keys(args).length === 0 && args.constructor === Object) ) {
        return localizedMessage;
      } else {
        try {
          // console.time('i18n');
          var translatedMessage = new IntlMessageFormat(localizedMessage, Casper.locale); // TODO cache??
          var rv = translatedMessage.format(args);
          // console.timeEnd('i18n');
          return rv;
        } catch (exception) {
          console.log(exception);
          return localizedMessage;
        }
      }
    }
  }

  return I18n;
};
