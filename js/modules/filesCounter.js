export default function filesCounter() {
    const counters = {
        files_counter: document.getElementById('files_counter'),
        errors_counter: document.getElementById('errors_counter')
    }

    const real_results = {
        success_transfer: document.getElementsByClassName('df-success').length,
        error_transfer: document.getElementsByClassName('df-error').length
    }

    const all_files = document.getElementsByClassName('df_preview').length;

    (function counter_init() {
        counters.files_counter.textContent = `${real_results.success_transfer} / ${all_files} files sent`;
        counters.errors_counter.textContent = `${real_results.error_transfer} errors`;
    })();
}         