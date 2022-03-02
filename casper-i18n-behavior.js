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

/*
  i18n_in_progress
  i18n_completed
  i18n_error
*/

import IntlMessageFormat from 'intl-messageformat/src/main.js';

export const Casper = {
  locale: window.localStorage.getItem('Casper-Locale') || 'pt',
  i18nData:  {
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
    },
    i18n_print_job: {
      en: 'Printing',
      pt: 'Impressão'
    },
    i18n_close_and_cancel: {
      en: 'Close and cancel',
      pt: 'Fechar e cancelar'
    },
    i18n_cancel: {
      en: 'Cancel',
      pt: 'Cancelar'
    },
    i18n_close: {
      en: 'Close',
      pt: 'Fechar'
    },
    i18n_completed: {
      en: 'Completed',
      pt: 'Concluído'
    },
    i18n_submit: {
      en: 'Submit',
      pt: 'Submeter'
    },
    i18n_error: {
      en: "Error",
      pt: "Erro"
    },
    i18n_unexpected_server_error: {
      en: "Unexpected error",
      pt: "Erro inesperado"
    },
    i18n_job_cancelled: {
      en: 'The job was canceled',
      pt: 'A tarefa foi cancelada'
    },
    i18n_upload_to_server_failed: {
      en: 'Upload to server failed',
      pt: 'O upload para o servidor falhou'
    },
    i18n_waiting_on_queue: {
      en: 'Waiting on queue',
      pt: 'Em fila de espera'
    },
    i18n_continue: {
      en: 'Continue',
      pt: 'Continuar'
    },
    i18n_close_and_continue: {
      en: 'Close and continue',
      pt: 'Fechar e continuar'
    },
    i18n_internal_error: {
      en: 'Internal error',
      pt: 'Error interno'
    },
    i18n_submit_job_error$tube: {
      en: 'Job submit failed ({tube} queue)',
      pt: 'Erro ao submeter tarefa (fila {tube})'
    },
    i18n_websocket_disconnected: {
      en: 'Connection interrupted, please try again',
      pt: 'Falha de comunicação, por favor tente de novo'
    },
    // JOBS
    i18n_reading_original_$image: {
      en: 'Reading original image {image}',
      pt: 'Lendo imagem original {image}'
    },
    i18n_scalling_image_$name$geometry: {
      en: "Scaling {name} to {geometry}",
      pt: "Escalando {name} para a geometria {geometry}"
    },
    i18n_image_conversion_complete: {
      en: 'Image conversion complete',
      pt: 'Conversão de imagem completa'
    },
    i18n_invalid_image: {
      en: 'Unable to read image, please check file format',
      pt: 'Não foi possível ler a imagem, por favor confirme o formato'
    },
    i18n_unsupported_$format: {
      en: 'Image format {format} is not supported, please check file format',
      pt: 'O formato de imagem {format} não é suportado, por favor confirme o formato do ficheiro'
    },
    i18n_image_too_wide_$width$max_width: {
      en: 'Image width of {width} pixels exceeds the allowed maximum of {max_width}, please use a lower resolution image',
      pt: 'A imagem tem {width} pixels de largura excedendo o máximo permitido de {max_width}, por favor use uma imagem com menos resolução'
    },
    i18n_image_too_tall_$height$max_height: {
      en: 'Image height of {height} pixels exceeds the allowed maximum of {max_height}, please use a lower resolution image',
      pt: 'A imagem tem {height} pixels de altura excedendo o máximo permitido de {max_height}, por favor use uma imagem com menos resolução'
    },
    i18n_printing_$document$page: {
      en: "Document {document}, page {page}",
      pt: "Documento {document}, página {page}"
    },
    i18n_printing_$document: {
      en: "Document {document}",
      pt: "Documento {document}"
    },
    i18n_loading_$document: {
      en: "Loading document {document}",
      pt: "A obter documento {document}"
    },
    i18n_invalid_entity_$entity: {
      en: "Invalid entity type: '{entity}'",
      pt: "Tipo de entidade desconhecido: '{entity}'"
    },
    i18n_entity_id_must_be_defined: {
      en: "Entity id must be defined",
      pt: "O identificador da entidade tem que ser especificado"
    },
    i18n_no_file_detected_to_import$zipfile: {
      en: "Archive {zipfile} does not contains a valid SAF-T file. Please submit a valid SAF-T file per archive.",
      pt: "O ficheiro ZIP {zipfile} não tem um documento SAF-T válido. Por favor submeta um documento válido SAF-T por ficheiro ZIP."
    },
    i18n_upload_saft: {
      en: "SAF-T Upload",
      pt: "Carregar SAF-T"
    },
    i18n_import_initializing_import_entry: {
      en: "Initializing import",
      pt: "A inicializar a importação"
    },
    i18n_import_reading_sales_line_products: {
      en: "Reading products only defined on lines",
      pt: "A ler serviços apenas presentes nas linhas de documentos"
    },
    i18n_import_initializing_counters: {
      en: "Getting number of items to import",
      pt: "A ler quantidade de itens a importar"
    },
    i18n_import_initializing_parser: {
      en: "Initializing SAF-T parser",
      pt: "A ler conteúdo do ficheiro SAF-T"
    },
    i18n_importing_initializing_import_entry: {
      en: "Registering import",
      pt: "A registrar importação"
    },
    i18n_import_documents: {
      en: "Importing sales documents",
      pt: "A importar documentos de venda"
    },
    i18n_importing_documents$current$total: {
      en: "Importing sales documents {current}/{total}",
      pt: "A importar documentos de venda {current}/{total}"
    },
    i18n_import_products: {
      en: "Importing products",
      pt: "A importar produtos"
    },
    i18n_importing_products$current$total: {
      en: "Importing products {current}/{total}",
      pt: "A importar produtos {current}/{total}"
    },
    i18n_import_services: {
      en: "Importing services",
      pt: "A importar serviços"
    },
    i18n_importing_services$current$total: {
      en: "Importing services {current}/{total}",
      pt: "A importar serviços {current}/{total}"
    },
    i18n_import_customers: {
      en: "Importing customers",
      pt: "A importar clientes"
    },
    i18n_importing_customers$current$total: {
      en: "Importing customers {current}/{total}",
      pt: "A importar clientes {current}/{total}"
    },
    i18n_import_suppliers: {
      en: "Importing suppliers",
      pt: "A importar fornecedores"
    },
    i18n_importing_suppliers$current$total: {
      en: "Importing suppliers {current}/{total}",
      pt: "A importar fornecedores {current}/{total}"
    },
    i18n_import_payments: {
      en: "Importing payments",
      pt: "A importar recibos de venda"
    },
    i18n_importing_payments$current$total: {
      en: "Importing payments {current}/{total}",
      pt: "A importar recibos de venda {current}/{total}"
    },
    i18n_success_saft_import: {
      en: "Successfully imported",
      pt: "Importação finalizada com sucesso"
    },
    i18n_errors_saft_import: {
      en: "Imported with errors",
      pt: "Importação finalizada com erros"
    },
    i18n_upload_saft_accounting: {
      en: "Generating fiscal plan",
      pt: "A criar exercício fiscal"
    },
    i18n_loading_company_data: {
      en: "Updating company info",
      pt: "A atualizar informação da empresa"
    },
    i18n_importing_initialize_parser: {
      en: "Initializing reader",
      pt: "A abrir ficheiro para leitura"
    },
    i18n_normalizing_saft_file$zipfile: {
      en: "Normalizing SAF-T file",
      pt: "A normalizar ficheiro SAF-T"
    },
    i18n_invalid_zip$zipfile: {
      en: "File {zipfile} is invalid",
      pt: "O ficheiro {zipfile} é inválido"
    },
    i18n_no_valid_xml_found_in_zip$zipfile: {
      en: "No valid SAF-T file in supplied ZIP",
      pt: "Não foi encontrado um ficheiro SAF-T válido no ZIP enviado"
    },
    i18n_multiple_xml_in_zip$zipfile: {
      en: "Archive {zipfile} contains more than one SAF-T file. Please submit just one SAF-T file per archive.",
      pt: "O ficheiro ZIP {zipfile} tem mais do que um documento SAF-T. Por favor submeta apenas um documento SAF-T por ficheiro ZIP."
    },
    i18n_invalid_input_file$zipfile: {
      en: "Uploaded file format not supported",
      pt: "O formato de ficheiro enviado não é suportado"
    },
    i18n_missing_xml_encoding$zipfile: {
      en: "SAF-T file encoding not defined at {zipfile}",
      pt: "Formato de codificação não definido no ficheiro SAF-T {zipfile}"
    },
    i18n_not_supported_xml_encoding$zipfile: {
      en: "SAF-T file encoding not supported",
      pt: "Formato de codificação não suportado no ficheiro SAF-T"
    },
    i18n_invalid_xml_version$zipfile: {
      en: "SAF-T file version not supported",
      pt: "Versão do ficheiro SAF-T não é suportada"
    },
    i18n_validation_error$zipfile: {
      en: "SAF-T file has validation errors",
      pt: "Foram encontrados erros de validação no SAF-T"
    },
    i18n_importing_initialize_counters: {
      en: "Counting elements to import",
      pt: "A contabilizar dados a importar"
    },
    i18n_importing_reading_aditional_products: {
      en: "Reading aditional product/service information from document lines",
      pt: "A obter informação de produtos/serviços nas linhas de documento"
    },
    i18n_expanding_general_ledger: {
      en: "Expanding fiscal year plan",
      pt: "A expandir plano de contas"
    },
    i18n_importing_general_ledger$current$total: {
      en: "Importing accounts {current}/{total}",
      pt: "A importar contas do plano {current}/{total}"
    },
    i18n_importing_general_ledger_entries$current$total: {
      en: "Importing transactions {current}/{total}",
      pt: "A importar lançamentos contabilísticos {current}/{total}"
    },
    i18n_importing_check_journals_numbering: {
      en: "Checking journals numbering",
      pt: "A validar a numeração dos diários com lançamentos"
    },
    i18n_updating_company_info: {
      en: "Updating company data",
      pt: "A atualizar dados gerais da empresa"
    },
    i18n_importing_accounting: {
      en: "Importing accounting",
      pt: "A importar contabilidade"
    },
    i18n_started_bulk_mail: {
      en: "Initializing email sending",
      pt: "A iniciar envio de emails"
    },
    i18n_preparing_$emails: {
      en: "Preparing to send {emails} email(s)",
      pt: "A preparar o envio de {emails} email(s)"
    },
    i18n_finished_$count_$fail_list: {
      en: "{count, plural, =1 {# email is sent} other {# emails were sent.}} No emails were sent to the following suppliers for missing the email address: {fail_list}",
      pt: "{count, plural, =1 {Foi enviado # email.} other {Foram enviados # emails.}} Não foram enviados emails para os fornecedores seguintes por faltar o endereço de email: {fail_list}"
    },
    i18n_finished_$count: {
      en: "{count, plural, =1 {# email is sent} other {# emails were sent.}}",
      pt: "{count, plural, =1 {Foi enviado # email.} other {Foram enviados # emails.}}"
    },
    i18n_mail_job: {
      en: "Emails sending",
      pt: "Envio de emails"
    },
    i18n_model10_no_emails: {
      en: "Can not send emails because suppliers do not have email address.",
      pt: "Não é possível enviar emails porque os fornecedores não têm endereço de email."
    },
    i18n_model_10_sending_to_$name: {
      en: "Sending email to {name}",
      pt: "A enviar email para {name}"
    },
    i18n_declarogate_gateway_internal_error: {
      en: "An error occurred with declarations server, please contact technical support.",
      pt: "Ocorreu um erro inesperado no servidor de declarações, por favor contacte o suporte técnico."
    },
    i18n_declarogate_gateway_success: {
      en: "Communication completed with declarations server",
      pt: "Comunicação concluída com o servidor de declarações"
    },
    i18n_declarogate_gateway_print_started: {
      en: "Printing declaration",
      pt: "A iniciar a impressão da declaração"
    },
    i18n_payroll_tax_report_print: {
      en: "Declaration print",
      pt: "Impressão da declaração"
    },
    i18n_declarogate_gateway_validate_started: {
      en: "Validating declaration",
      pt: "A iniciar a validação da declaração"
    },
    i18n_payroll_tax_report_validate: {
      en: "Declaration validation",
      pt: "Validação da declaração"
    },
    i18n_declarogate_gateway_submit_started$entity_name: {
      en: "Submitting declaration",
      pt: "A iniciar a submissão da declaração junto da(o) {entity_name}"
    },
    i18n_payroll_tax_report_submit: {
      en: "Declaration submission",
      pt: "Submissão da declaração"
    },
    i18n_payroll_tax_report_submit_success: {
      en: "Declaration submission report",
      pt: "Relatório da submissão da declaração"
    },
    i18n_payroll_tax_report_no_data_found: {
      en: "There isn´t found declaration data.",
      pt: "Não foram encontrados os dados da declaração."
    },
    i18n_payroll_tax_report_no_data_to_update: {
      en: "An internal error occurred while trying to save declaration data, please contact technical support.",
      pt: "Erro interno ao tentar gravar os dados da declaração, por favor contacte o suporte técnico."
    },
    i18n_payroll_tax_report_invalid_company_social_security_number: {
      en: "To be able to follow you must have the NISS field of the company correctly filled.",
      pt: "Para poder prosseguir tem de ter o campo NISS na ficha da empresa corretamente preenchido."
    },
    i18n_payroll_tax_report_validate_success: {
      en: "Declaration without errors",
      pt: "Declaração sem erros"
    },
    i18n_payroll_tax_report_errors: {
      en: "Declaration with errors",
      pt: "Declaração com erros"
    },
    // Document names
    i18n_filename_ruas_annex_0: {
      en: 'Relatório Único Anexo 0 {company_tax_registration_number} {date}',
      pt: 'Relatório Único Anexo 0 {company_tax_registration_number} {date}'
    },
    i18n_filename_ruas_annex_a: {
      en: 'Relatório Único Anexo A {company_tax_registration_number} {date}',
      pt: 'Relatório Único Anexo A {company_tax_registration_number} {date}'
    },
    i18n_filename_ruas_annex_b: {
      en: 'Relatório Único Anexo B {company_tax_registration_number} {date}',
      pt: 'Relatório Único Anexo B {company_tax_registration_number} {date}'
    },
    i18n_filename_accounting_transaction_detail: {
      en: 'Lançamento - {resource_name} {company_tax_registration_number} {date}',
      pt: 'Lançamento - {resource_name} {company_tax_registration_number} {date}'
    },
    i18n_filename_account_statement: {
      en: 'Extrato Contas {company_tax_registration_number} {date}',
      pt: 'Extrato Contas {company_tax_registration_number} {date}'
    },
    i18n_filename_journal_statement: {
      en: 'Extrato Diário {company_tax_registration_number} {date}',
      pt: 'Extrato Diário {company_tax_registration_number} {date}'
    },
    i18n_filename_dimension_cost_center: {
      en: 'Extratos analítica rubrica centros de custo {company_tax_registration_number} {date}',
      pt: 'Extratos analítica rubrica centros de custo {company_tax_registration_number} {date}'
    },
    i18n_filename_cost_center_dimension: {
      en: 'Extratos analítica centros de custo rubricas {company_tax_registration_number} {date}',
      pt: 'Extratos analítica centros de custo rubricas {company_tax_registration_number} {date}'
    },
    i18n_filename_trial_balance: {
      en: 'Balancete acumulado {company_tax_registration_number} {date}',
      pt: 'Balancete acumulado {company_tax_registration_number} {date}'
    },
    i18n_filename_trial_balance_period: {
      en: 'Balancete periodo acumulado {company_tax_registration_number} {date}',
      pt: 'Balancete periodo acumulado {company_tax_registration_number} {date}'
    },
    i18n_filename_trial_balance_last_period: {
      en: 'Balancete anterior periodo acumulado {company_tax_registration_number} {date}',
      pt: 'Balancete anterior periodo acumulado {company_tax_registration_number} {date}'
    },
    i18n_filename_account_position: {
      en: 'Posição por conta {company_tax_registration_number} {date}',
      pt: 'Posição por conta {company_tax_registration_number} {date}'
    },
    i18n_filename_exploration_map: {
      en: 'Mapa de exploração {company_tax_registration_number} {date}',
      pt: 'Mapa de exploração {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_recapitulative_declaration: {
      en: 'IVA - Declaração Recapitulativa {company_tax_registration_number} {date}',
      pt: 'IVA - Declaração Recapitulativa {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_recapitulative_declaration_cover: {
      en: 'IVA - Declaração Recapitulativa {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'IVA - Declaração Recapitulativa {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_conference_map: {
      en: 'IVA - Mapa de conferência {company_tax_registration_number} {date}',
      pt: 'IVA - Mapa de conferência {company_tax_registration_number} {date}'
    },
    i18n_filename_declaration_withholding_tax_and_is: {
      en: 'Declaração de retenções na fonte e IS {company_tax_registration_number} {date}',
      pt: 'Declaração de retenções na fonte e IS {company_tax_registration_number} {date}'
    },
    i18n_filename_model10: {
      en: 'IRC - Modelo 10 {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 10 {company_tax_registration_number} {date}'
    },
    i18n_filename_model_10_conference_map: {
      en: 'IRC - Modelo 10 - Mapa de conferência {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 10 - Mapa de conferência {company_tax_registration_number} {date}'
    },
    i18n_filename_model10_retention_letter: {
      en: 'IRC - Modelo 10 - Declarações de rendimentos {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 10 - Declarações de rendimentos {company_tax_registration_number} {date}'
    },
    i18n_filename_ies_area: {
      en: 'IES - Declaração Anual {company_tax_registration_number} {date}',
      pt: 'IES - Declaração Anual {company_tax_registration_number} {date}'
    },
    i18n_filename_ies_conference_map: {
      en: 'IES - Mapa de conferência {company_tax_registration_number} {date}',
      pt: 'IES - Mapa de conferência {company_tax_registration_number} {date}'
    },
    i18n_filename_ies_vat_conference_map: {
      en: 'IES - Mapa de conferência dos anexos L-M-N {company_tax_registration_number} {date}',
      pt: 'IES - Mapa de conferência dos anexos L-M-N {company_tax_registration_number} {date}'
    },
    i18n_filename_ies_annex_o_p_conference_map: {
      en: 'IES - Mapa recapitulativo {company_tax_registration_number} {date}',
      pt: 'IES - Mapa recapitulativo {company_tax_registration_number} {date}'
    },
    i18n_filename_balance_sheet: {
      en: 'Balanço {company_tax_registration_number} {date}',
      pt: 'Balanço {company_tax_registration_number} {date}'
    },
    i18n_filename_profit_and_loss: {
      en: 'Demonstração dos resultados por naturezas {company_tax_registration_number} {date}',
      pt: 'Demonstração dos resultados por naturezas {company_tax_registration_number} {date}'
    },
    i18n_filename_cash_flow_statement: {
      en: 'Demonstração Fluxos de Caixa {company_tax_registration_number} {date}',
      pt: 'Demonstração Fluxos de Caixa {company_tax_registration_number} {date}'
    },
    i18n_filename_statements_change_capital_own: {
      en: 'Demonstração Alterações de capital próprio {company_tax_registration_number} {date}',
      pt: 'Demonstração Alterações de capital próprio {company_tax_registration_number} {date}'
    },
    i18n_filename_model_31: {
      en: 'Mapa de mais-valias e menos-valias {company_tax_registration_number} {date}',
      pt: 'Mapa de mais-valias e menos-valias {company_tax_registration_number} {date}'
    },
    i18n_filename_model_32: {
      en: 'Mapa de depreciações e amortizações {company_tax_registration_number} {date}',
      pt: 'Mapa de depreciações e amortizações {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration: {
      en: 'DPIVA {year}_{period} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_cover: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_annex_r: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_field_40: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_field_41: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_customers: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_vat_periodic_declaration_suppliers: {
      en: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}',
      pt: 'DPIVA {year}_{period} {name} {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22: {
      en: 'IRC - Modelo 22 {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_cover: {
      en: 'IRC - Modelo 22 Rosto {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Rosto {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_annex_a: {
      en: 'IRC - Modelo 22 Anexo A {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Anexo A {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_annex_c: {
      en: 'IRC - Modelo 22 Anexo C {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Anexo C {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_annex_d: {
      en: 'IRC - Modelo 22 Anexo D {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Anexo D {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_annex_e: {
      en: 'IRC - Modelo 22 Anexo E {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Anexo E {company_tax_registration_number} {date}'
    },
    i18n_filename_model_22_annex_aimi: {
      en: 'IRC - Modelo 22 Anexo AIMI {company_tax_registration_number} {date}',
      pt: 'IRC - Modelo 22 Anexo AIMI {company_tax_registration_number} {date}'
    },
    i18n_filename_asset_form: {
      en: 'Ativo {resource_name} {company_tax_registration_number} {date}',
      pt: 'Ativo {resource_name} {company_tax_registration_number} {date}'
    },
    i18n_filename_svat_report: {
      en: "SVAT - Relatório de conformidade {company_tax_registration_number} {date}",
      pt: "SVAT - Relatório de conformidade {company_tax_registration_number} {date}"
    },
    i18n_filename_general_ledger_report: {
      en: "Plano de contas {company_tax_registration_number} {date}",
      pt: "Plano de contas {company_tax_registration_number} {date}"
    },
    i18n_printing_document_does_not_exists: {
      en: "The document you tried to print does not exists.",
      pt: "O documento que tentou imprimir não existe."
    },
    i18n_filename_asset_fiscal_analysis: {
      en: "Fiscal Analysis {resource_name} {company_tax_registration_number} {date}",
      pt: "Análise fiscal {resource_name} {company_tax_registration_number} {date}"
    },
    i18n_filename_asset_accounting_analysis: {
      en: "Accounting Analysis {resource_name} {company_tax_registration_number} {date}",
      pt: "Análise contabilística {resource_name} {company_tax_registration_number} {date}"
    },
    i18n_filename_asset_cumulative_movements: {
      en: "Initial balance {resource_name} {company_tax_registration_number} {date}",
      pt: "Saldos iniciais {resource_name} {company_tax_registration_number} {date}"
    },
    i18n_filename_transaction_log: {
      en: "History {company_tax_registration_number} {date}",
      pt: "Histórico de lançamentos {resource_name} {company_tax_registration_number} {date}"
    },
    i18n_destroy_saft: {
      en: "Destroying SAF-T",
      pt: "Eliminar importação de SAF-T"
    },
    i18n_initializing_delete: {
      en: "Initializing SAF-T delete",
      pt: "A iniciar eliminação de SAF-T"
    },
    i18n_deleting_receipts$current$total: {
      en: "Deleting receipt {current}/{total}",
      pt: "A eliminar recibo {current}/{total}"
    },
    i18n_deleting_payments$current$total: {
      en: "Deleting receipt {current}/{total}",
      pt: "A eliminar recibo {current}/{total}"
    },
    i18n_deleting_documents$current$total: {
      en: "Deleting document {current}/{total}",
      pt: "A eliminar documento {current}/{total}"
    },
    i18n_deleting_products$current$total: {
      en: "Deleting product {current}/{total}",
      pt: "A eliminar produto {current}/{total}"
    },
    i18n_deleting_services$current$total: {
      en: "Deleting service {current}/{total}",
      pt: "A eliminar serviço {current}/{total}"
    },
    i18n_deleting_customers$current$total: {
      en: "Deleting customer {current}/{total}",
      pt: "A eliminar cliente {current}/{total}"
    },
    i18n_deleting_suppliers$current$total: {
      en: "Deleting supplier {current}/{total}",
      pt: "A eliminar fornecedor {current}/{total}"
    },
    i18n_saft_belongs_to_other_company: {
      en: "SAF-T belongs to a diferent company.",
      pt: "O SAF-T pertence a uma outra empresa."
    },
    i18n_saft_invalid_structure: {
      en: "The SAF-T file does not respect the structure defined by the ordinance. Please validate in advance in (http://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/SAFT_PT/Paginas/news-saf-t-pt.aspx)",
      pt: "O ficheiro SAF-T não respeita a estrutura definida pela portaria. Por favor valide previamente no validador da Autoridade Tributária em (http://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/SAFT_PT/Paginas/news-saf-t-pt.aspx)"
    },
    i18n_saft_not_supported: {
      en: "SAF-T submited is not supported.",
      pt: "O SAF-T submetido não é suportado."
    },
    i18n_saft_no_accounting_data: {
      en: "SAF-T does not contain accounting data.",
      pt: "O SAF-T submetido não contém informação de contabilidade."
    },
    i18n_saft_no_billing_data: {
      en: "SAF-T does not contain billing data.",
      pt: "O SAF-T submetido não contém informação de faturação."
    },
    i18n_saft_tax_country_region_not_defined: {
      en: "No tax country region defined.",
      pt: "Não se encontrou definição para o país."
    },
    i18n_saft_invalid: {
      en: "Submitted SAF-T is invalid.",
      pt: "O SAF-T submetido é inválido."
    },
    i18n_import_saft_starting: {
      en: "Starting SAF-T import",
      pt: "A iniciar importação de SAF-T"
    },
    i18n_upload_model_3: {
      en: "Generate model 3",
      pt: "Gerar modelo 3"
    },
    i18n_model_3_annex_b: {
      en: "Generating annex B",
      pt: "A gerar anexo B"
    },
    i18n_model_3_annex_c: {
      en: "Generating annex C",
      pt: "A gerar anexo C"
    },
    i18n_model_3_annex_ss: {
      en: "Generating annex SS",
      pt: "A gerar anexo SS"
    },
    i18n_model3_invalid_file: {
      en: 'Submitted model 3 file is invalid',
      pt: 'O ficheiro do modelo 3 submetido é inválido'
    },
    i18n_model3_belongs_to_other_company: {
      en: 'Submitted model 3 file belongs to other company',
      pt: 'O ficheiro do modelo 3 submetido pertence a outra empresa'
    },
    i18n_create_fiscal_year: {
      en: 'Creating Fiscal Year',
      pt: 'A criar exercício fiscal'
    },
    i18n_validate_tax_registration_number: {
      en: 'Finding VAT number info',
      pt: 'A procurar informação para o NIF'
    },
    i18n_toconline_addresses_lookup: {
      en: "Validating tax registration number",
      pt: "A validar NIF"
    },
    i18n_select_saft_to_convert: {
      en: "Choose the SAF-T file to convert",
      pt: "Selecione o SAF-T a converter"
    },
    i18n_validating_saft_file: {
      en: "Validating SAF-T file",
      pt: "A validar ficheiro SAF-T"
    },
    i18n_success_validating_now_converting: {
      en: "Successfully validated SAF-T file, converting to Excel",
      pt: "Ficheiro SAF-T validado com sucesso, a converter para Excel"
    },
    i18n_success_saft_to_xlsx_conversion: {
      en: "Successfully converted",
      pt: "Conversão finalizada com sucesso"
    },
    i18n_payroll_loading_data_model: {
      en: "Loading calculation model",
      pt: "A carregar o modelo de calculo"
    },
    i18n_payroll_calculating_$name: {
      en: "Calculating {name}'s' payroll",
      pt: "A calcular salário de {name}"
    },
    i18n_roles_mask_1: {
      en: 'Utilizador',
      pt: 'Utilizador'
    },
    i18n_roles_mask_1_behave_as_employee: {
      en: 'Colaborador',
      pt: 'Colaborador'
    },
    i18n_roles_mask_2: {
      en: 'Empresário',
      pt: 'Empresário'
    },
    i18n_roles_mask_4: {
      en: 'Contabilista responsável',
      pt: 'Contabilista responsável'
    },
    i18n_roles_mask_8: {
      en: 'Faturação nível 2',
      pt: 'Faturação nível 2'
    },
    i18n_roles_mask_16: {
      en: 'Faturação nível 1',
      pt: 'Faturação nível 1'
    },
    i18n_roles_mask_32: {
      en: 'Compras',
      pt: 'Compras'
    },
    i18n_roles_mask_64: {
      en: 'Salários',
      pt: 'Salários'
    },
    i18n_roles_mask_128: {
      en: '***Perfil não identificado (128)',
      pt: '***Perfil não identificado (128)'
    },
    i18n_roles_mask_256: {
      en: 'Gestão de ativos (acesso leitura)',
      pt: 'Gestão de ativos (acesso leitura)'
    },
    i18n_roles_mask_512: {
      en: 'Gestão de ativos (acesso completo)',
      pt: 'Gestão de ativos (acesso completo)'
    },
    i18n_roles_mask_1024: {
      en: 'Contabilista Plenos Poderes',
      pt: 'Contabilista Plenos Poderes'
    },
    i18n_roles_mask_2048: {
      en: 'Contabilista lançamentos',
      pt: 'Contabilista lançamentos'
    },
    i18n_roles_mask_4096: {
      en: '***Perfil não identificado (4096)',
      pt: '***Perfil não identificado (4096)'
    },
    i18n_roles_mask_8192: {
      en: 'Contabilista anterior',
      pt: 'Contabilista anterior'
    },
    i18n_roles_mask_16384: {
      en: 'Suporte OCC',
      pt: 'Suporte OCC'
    },
    i18n_roles_mask_32768: {
      en: 'SUPER USER',
      pt: 'SUPER USER'
    },
    i18n_roles_mask_65536: {
      en: 'Suporte Cloudware',
      pt: 'Suporte Cloudware'
    },
    i18n_roles_mask_131072: {
      en: 'Gestão de Senhas',
      pt: 'Gestão de Senhas'
    },
    i18n_roles_mask_536870912: {
      en: 'BETA',
      pt: 'BETA'
    },
    i18n_success_model_3_generation: {
      en: 'Model 3 generation completed successfully',
      pt: 'Modelo 3 gerado com sucesso'
    },
    i18n_module_ga: {
      en: 'Gestão Administrativa',
      pt: 'Gestão Administrativa'
    },
    i18n_module_gc: {
      en: 'Gestão Comercial',
      pt: 'Gestão Comercial'
    },
    i18n_progress: {
      en: 'In Progress',
      pt: 'Em Progresso'
    },
    i18n_commit_document: {
      en: 'Finalizing document',
      pt: 'A finalizar documento'
    }
  },
  uploadI18n: {
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
  },
  I18n: (superClass) => {
    class I18n extends superClass {

      i18nUpdateUpload (vaadinUpload) {
        var resources  = Casper.uploadI18n[Casper.locale]
                      || Casper.uploadI18n[Casper.locale.substring(0,2)];

        if ( resources !== undefined ) {
          vaadinUpload.i18n = resources;
        }
      }

      i18n (message, args) {
        const resources = Casper.i18nData[message];
        let localizedMessage;

        if (resources) {
          localizedMessage = resources[Casper.locale] ||
                              resources[Casper.locale.substring(0,2)] ||
                              resources['en'] ||
                              message;
        } else {
          return message;
        }

        if (!args || (Object.keys(args).length === 0 && args.constructor === Object)) {
          return localizedMessage;
        }

        try {
          const messageFormat = new IntlMessageFormat(localizedMessage, Casper.locale);
          return messageFormat.format(args);
        } catch (exception) {
          console.log(exception);
          return localizedMessage;
        }
      }
    }

    return I18n;
  }
};
